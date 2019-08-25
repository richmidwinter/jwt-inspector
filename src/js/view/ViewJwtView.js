import url from 'url';
import React from 'react';
import { getCurrentTab } from '../utils';
import DevToolsPanelDebugView from './DevToolsPanelDebugView';
import '../../css/view-jwt-view.less';

export default class ViewJwtView extends DevToolsPanelDebugView {
    componentWillMount()  {
        if (this.state.jwt === null) {
            getCurrentTab().then((tab) => {
                let parsedUrl = url.parse(tab.url, true);

                if (parsedUrl.query && parsedUrl.query.jwt) {
                    this.setState({
                        jwt: parsedUrl.query.jwt
                    });
                }
            });
        }
    }

    render() {
        return ( <div id="view-jwt-view"> { super.render() } </div>
        );
    }
}