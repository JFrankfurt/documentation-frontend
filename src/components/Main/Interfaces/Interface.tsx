// External libraries
import * as _ from "lodash";
import * as React from "react";

// Semantic-UI components
import { Header as SemanticHeader } from "semantic-ui-react";

// Components
import Snippet from "../Method/Snippet";

interface Props {
    interfaceDoc: InterfaceDocumentation;
}

/**
 * A component that renders documentation for an interface.
 */
export default class Interface extends React.Component<Props, {}> {
    public interfaceParamString(interfaceDoc: any) {
        const isSimpleType = interfaceDoc.type && interfaceDoc.type.name;
        const isArray = !!interfaceDoc.elementType;
        const type = isSimpleType
            ? interfaceDoc.type.name
            : isArray ? `${interfaceDoc.elementType.name}[]` : "";

        return `\t${interfaceDoc.name}: ${type};\n`;
    }

    public interfaceAsCode() {
        const { interfaceDoc } = this.props;

        return "{\n" + _.map(interfaceDoc.children, this.interfaceParamString).join("\n") + "}\n";
    }

    public render() {
        const { name } = this.props.interfaceDoc;

        return (
            <div className="Interface">
                <a className="ContentAnchor" id={name} />

                <SemanticHeader>{name}</SemanticHeader>

                <Snippet code={this.interfaceAsCode()}/>
            </div>

            // <div>
            //
            //     <SemanticHeader size="small">Example</SemanticHeader>
            //     <Snippet code={code}/>
            // </div>
        );
    }
}
