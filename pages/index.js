import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Campaign from '../ethereum/campaign';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        let campaign;
        let summary;
        let titles = [];
        let descriptions = [];

        for (var i = 0; i < campaigns.length; i++) {
            campaign = Campaign(campaigns[i]);
            summary = await campaign.methods.getSummary().call();
            titles.push(summary[5]);
            descriptions.push(summary[6]);
        }

        return { campaigns, titles, descriptions }; // === return { campaigns: campaigns }
    }

    renderCampaigns() {
        let address;
        let items = [];

        for (var i = 0; i < this.props.campaigns.length; i++) {
            address = this.props.campaigns[i];

            items.push(
                <Card fluid key={i}>
                    <Card.Content>
                        <Link route={`/campaigns/${address}`}>
                            <a>
                                <Button
                                    primary // === primary={true}
                                    floated="right"
                                >
                                    View Campaign
                                    <Icon name="chevron circle right" />
                                </Button>
                            </a>
                        </Link>
                        <Card.Header>
                            {
                                this.props.titles[
                                    this.props.campaigns.indexOf(address)
                                ]
                            }
                        </Card.Header>
                        <Card.Meta>{address.toLowerCase()}</Card.Meta>
                        <Card.Description>
                            {
                                this.props.descriptions[
                                    this.props.campaigns.indexOf(address)
                                ]
                            }
                        </Card.Description>
                    </Card.Content>
                </Card>
            );
        }

        return <Card.Group>{items}</Card.Group>;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                content="Create Campaign"
                                icon="add circle"
                                primary // === primary={true}
                                floated="right"
                            />
                        </a>
                    </Link>

                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;
