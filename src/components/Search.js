import React, {Component} from 'react';
import { Tab, Button, Select, Input } from 'semantic-ui-react'
import SearchForm from "./SearchForm";

const onesearchOptions = [
    { key: 'onesearch', text: 'One Search', value: 'onesearch' },
    { key: 'ut-collections', text: 'UT Collections', value: 'ut-collections' },
    { key: 'course-reserves', text: 'Course Reserves', value: 'course-reserves' },
]

class Search extends Component {

    render() {

        const panes = [
            { menuItem: 'One Search', render: () =>
                <SearchForm selection='onesearch'
                            options={onesearchOptions}
                            placeholder='Search for books, articles, and more...' />
            },
            { menuItem: 'Our Website', render: () =>
                <SearchForm selection='libraries'
                            placeholder='Search our website for services and more...' />
            }
        ]

        return (
            <div className="utk-panel--search">
                <div className="utk-search">
                    <div className="utk-search--links">
                        <a href="https://utk.primo.exlibrisgroup.com/discovery/search?vid=01UTN_KNOXVILLE:01UTK&mode=advanced">Advanced<span className="icon-right-big"></span></a>
                        <a href="https://utk.primo.exlibrisgroup.com/discovery/browse?vid=01UTN_KNOXVILLE:01UTK">Browse<span className="icon-right-big"></span></a>
                    </div>
                    <Tab menu={{ text: true }} panes={panes} className="utk-search-tabs" />
                </div>
            </div>
        )
    }
}

export default Search;
