import * as React from 'react';
import axios from 'axios';

interface SiegeState {
    weaponSearch: string,
    siegeWeapons: SiegeWeapon[],
}

interface SiegeWeapon {
    name: string,
    rating: SiegeRating,
}

interface SiegeRating {
    rating: number,
    review: string,
    valid: boolean,
}

export class SiegeComponent extends React.Component<void, SiegeState> {
    constructor(props) {
        super(props);

        this.state = {
            siegeWeapons: [],
            weaponSearch: "",
        };

        this.rate = this.rate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event): void {
        this.setState({
            weaponSearch: event.target.value,
        });
    }

    rate(): void {
        const search = this.state.weaponSearch;
        axios("/rate/" + search).then((response) => {
            const newWeapon: SiegeWeapon = {
                name: search,
                rating: response.data
            };
            const orderedWeapons = [...this.state.siegeWeapons, newWeapon].sort((sw) => sw.rating.rating).reverse();
            return this.setState({
                weaponSearch: "",
                siegeWeapons: orderedWeapons
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    renderWeapons(): JSX.Element[] {
        return this.state.siegeWeapons.map((sw: SiegeWeapon) => {
            return (
                <li key={sw.name}>
                    <strong>{sw.name}</strong> ({sw.rating.rating}) <pre>{sw.rating.review}</pre>
                </li>
            );
        });
    }

    render (): JSX.Element {
        return (
            <div>
                <h1>Advanced Siege Weapon Rating System</h1>
                <input value={this.state.weaponSearch} onChange={this.handleSearch} />
                <button onClick={this.rate}>Rate</button>
                <ul>
                    {this.renderWeapons()}
                </ul>
            </div>
        );
    }
}
