// External libraries
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Divider, Segment } from "semantic-ui-react";

// Components
import Section from "./Section/Section";

// Component-specific style
import "./Main.css";

import Contributing from "./Contributing/Contributing";
import Interface from "./Interface/Interface";
import Installation from "./Introduction/Installation";
import LoanAPI from "./LoanAPI/LoanAPI";
import LoanRequestAPI from "./LoanRequestAPI/LoanRequestAPI";
import Upgrading from "./Upgrading/Upgrading";

interface Props {
    documentation: Documentation;
}

/**
 * A component that renders the main contents of the documentation.
 */
export default class Main extends React.Component<Props, {}> {
    public render() {
        const { documentation } = this.props;

        return (
            <Segment basic className="MainSegment">
                <Installation />
                <Divider />

                <LoanRequestAPI />
                <Divider />

                <LoanAPI />
                <Divider />

                {// For each section, render a Section component with the relevant data.
                _.map(documentation.sections, (section) => {
                    return <Section key={section.title} section={section} />;
                })}

                <h1>Interfaces</h1>
                {_.map(documentation.interfaces, (interfaceDoc) => {
                    return <Interface interfaceDoc={interfaceDoc} />;
                })}

                <Contributing />
                <Divider />

                <Upgrading />
                <Divider />
            </Segment>
        );
    }
}
