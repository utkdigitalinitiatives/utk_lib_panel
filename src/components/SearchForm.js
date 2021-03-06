import React, {Component} from 'react';
import {Button, Form, Input, Select, Tab} from "semantic-ui-react";
import TagManager from 'react-gtm-module'

const searchEndpoint = "https://www.lib.utk.edu/search/submit?go=1"
// const searchEndpointDebug = "https://utklibrary.test/search/submit/?go=1"

class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            option: this.props.options[0].key
        };
    }

    getOptions = (options) => {
        if (options) {
            return <Select compact
                           icon
                           name="primo"
                           className="icon-down-open"
                           options={options}
                           defaultValue={options[0].key}
                           onChange={this.handleOptionChange} />
        } else {
            return null
        }
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })

        const tagManagerArgs = {
            gtmId: 'GTM-MB99NS',
            dataLayer: {
                searchValue: e.target.value,
                searchMethod: this.props.selection,
            }
        }

        TagManager.initialize(tagManagerArgs)
    }

    handleOptionChange = (e, {value}) => this.setState({ option : value })

    componentWillUpdate(nextProps, nextState) {
        const tagManagerArgs = {
            gtmId: 'GTM-MB99NS',
            dataLayer: {
                searchMethod: nextProps.selection,
            }
        }

        TagManager.initialize(tagManagerArgs)
    }

    render() {

        const {selection, placeholder, options} = this.props

        return (
            <Tab.Pane attached={false}>
                <Form method="post"
                      className="utk-search--form"
                      action={searchEndpoint}>
                    <span className="utk-search--icon">
                        <span className="icon-search"></span>
                    </span>
                    <Input type='text'
                           name="value"
                           placeholder={placeholder}
                           aria-label={placeholder}
                           onChange={this.handleInputChange}
                           action>
                        <input />
                        {this.getOptions(options)}
                        <Button type='submit'>Submit</Button>
                    </Input>
                    <Input className='utk-search-method-hidden'
                           type='hidden'
                           name='method'
                           value={selection}/>
                    <Input className='utk-search-method-hidden'
                           type='hidden'
                           name='primo'
                           value={this.state.option}/>
                </Form>
            </Tab.Pane>
        )
    }
}

export default SearchForm;
