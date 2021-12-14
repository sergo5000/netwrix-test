import React from 'react';

import netwrixLogo from '../images/netwrix-logo-120x25.png';
import distributorLogo from '../images/partner-logo-distributor.png';
import eliteLogo from '../images/partner-logo-elite.png';
import mspLogo from '../images/partner-logo-msp.png';
import preferredLogo from '../images/partner-logo-preferred.png';
import premiumLogo from '../images/partner-logo-premium.png';
    
export default class Main extends React.Component {    
    constructor(props) {
        super(props);

        const allStatuses = props.allStatuses.map(item => {return {title: item, visible: true};});

        this.state = {type: props.type, showTypeDropdownContent: false, cards: props.partnerLocators, allStatuses, hasRequest: false};
    }

    componentDidMount = () => {     
        document.body.addEventListener('click', this.onClick)
    }

    onClick = async (event) => {
        const target = event.target;

        if(target.closest('.dropdown-type')) {
            if(target.classList.contains('dropdown-button')) {
                this.setState({showTypeDropdownContent: !this.state.showTypeDropdownContent});
            }
        } else {
            this.setState({showTypeDropdownContent: false});
        }

        if(target.classList.contains('dropdown-item') && !this.state.hasRequest) {
            this.setState({hasRequest: true, type: target.innerHTML});
            await this.findCards(target.innerHTML);
            this.setState({hasRequest: false});
        }
    }

    findCards = async (type) => {
        const formData = new FormData();
        formData.append('type', type);

        const data = {
            method: 'POST',
            body: formData,
        };

        let response = await fetch('/find-cards', data);
        response = await response.json();
        this.setState({cards: response});
    }

    searchTypeContent = (event) => {
        const allStatuses = this.state.allStatuses;
        const value = event.target.value.trim().toLowerCase();

        allStatuses.forEach(item => {
            if(!value) {
                item.visible = true;
            } else if(item.title.toLowerCase().includes(value)) {
                item.visible = true;
            } else {
                item.visible = false;
            }
        });

        this.setState({allStatuses});
    }
    
    renderCard = (item, i) => {
        return (
            <div key={i} className="card">
                <img className="card-image" src={this.getImage(item.status)} />
                <div className="card-info">
                    <h2 className="card-title">{item.company}</h2>
                    <p className="card-address">{item.address}</p>
                </div>
                <div className="card-contacts">
                    <a href="{item.website}" target="_blank" className="card-website">Website</a>
                    <p className="card-phone">{item.phone}</p>
                </div>
                <div className="card-type">{item.status}</div>
            </div>
        );
    }

    renderDropdownItem = (item, i) => {
        if(item.visible) {
            return <p key={i} className="dropdown-item">{item.title}</p>;
        }

        return null;
    }

    getImage = (status) => {
        if(status == 'MSP Partner') {
            return mspLogo;
        } else if(status == 'Preferred Partner') {
            return preferredLogo;
        } else if(status == 'Premium Partner') {
            return premiumLogo;
        } else if(status == 'Elite Partner') {
            return eliteLogo;
        } else if(status == 'Distributor') {
            return distributorLogo;
        } 

        return null;
    }

    render = () => {
        const dropdownItems = this.state.allStatuses.map((item, i) => this.renderDropdownItem(item, i));
        const cardItems = this.state.cards.map((item, i) => this.renderCard(item, i));

        return (
            <main>
                <header>

                    <div className="header-title">
                        <img className="header-logo" src={netwrixLogo} />
                    </div>

                    <div className="header-controls">
                        <div className="header-controls-wrapper">

                            <h1><span>Netwrix</span> Partner Locator</h1>
                            <div className="header-description">
                                <p><span>Hundreds of Netwrix partners around</span> the world are standing by to help you.</p>
                                <p><span>With our Partner Locator you can easily find</span> <span>the list of authorized partners</span> in your area.</p>
                            </div>
                            <div className="header-search">
                                <div className="header-search-wrapper">
                                    <input type="text" />
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>

                            <div className="header-filters">
            
                                <div className="dropdown dropdown-type">
                                    <button className="dropdown-button">{this.state.type}</button>
                                    {this.state.showTypeDropdownContent ? (
                                        <div className="dropdown-content">
                                            <input type="text" onChange={this.searchTypeContent} />
                                            {dropdownItems} 
                                        </div>) : null
                                    }
                                </div>

                                <div className="dropdown dropdown-country">
                                    <button className="dropdown-button">Country</button>
                                </div>

                                <div className="dropdown dropdown-state">
                                    <button className="dropdown-button">State</button>
                                </div>

                            </div>

                        </div>
                    </div>

                </header>

                <section className="cards">
                    {cardItems.length ? cardItems : <p className="cards-empty">Your search parameters did not match any partners. Please try different search.</p>}
                </section>

                {this.state.hasRequest ? (
                    <div className="loader">
                        <div className="spinner"></div>
                    </div>) : null
                }
            </main>
        );    
    }
}
