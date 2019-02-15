pragma solidity ^0.4.25;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint _minimum, string _title, string _description) public {
        require(bytes(_title).length <= 50);
        require(bytes(_description).length <= 200);
        address newCampaign = new Campaign(_minimum, msg.sender, _title, _description);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    string title;
    string description;
    mapping(address => bool) public approvers;
    mapping(address => uint) public approverValue;
    address[] public approverAddress;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint _minimum, address _creator, string _title, string _description) public {
        manager = _creator;
        minimumContribution = _minimum;
        title = _title;
        description = _description;
    }
    
    function contribute() public payable {
        require(msg.value >= minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
        approverValue[msg.sender] = msg.value;
        approverAddress.push(msg.sender);
    }
    
    function createRequest(string _description, uint _value, address _recipient) 
        public restricted {
        Request memory newRequest = Request({
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }
    
    function approveRequest(uint _index) public {
        Request storage request = requests[_index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint _index) public restricted {
        Request storage request = requests[_index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
        
        for(uint i=0; i < approverAddress.length; i++) {
            approverValue[approverAddress[i]] = approverValue[approverAddress[i]] - (request.value / approversCount) - 1;
        }
    }
    
    function refund() public {
        require(approvers[msg.sender]);

        msg.sender.transfer(approverValue[msg.sender]);
        
        approverValue[msg.sender] = 0;
        approvers[msg.sender] = false;
        approversCount -= 1;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address, string, string
    ) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager,
            title,
            description
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}

