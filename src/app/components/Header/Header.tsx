import * as React from 'react';
import logo from '../../images/group.png';
import global from '../../styles/global.css';  
import kk from '../../styles/kk.scss'; 
//require('../../styles/global.css');
//require('../../styles/kk.scss');

import { Button } from 'office-ui-fabric-react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

interface IProps {
    compiler: string,
    framework: string,
    bundler: string
}

export class Header extends React.Component<IProps, {}> {
    render() {
        return (
            <header>
                <h1 className={global.hello}>
                    This is a {this.props.framework} application using {this.props.compiler} with {this.props.bundler}
                </h1>
                <img src={logo} />
                <span className={global.iconPaste} />
                <span className={global.iconFacebook2} />
                <div className={kk.kk}>This is kk aa</div>
                <DefaultButton
                    text="Button"
                />

<Dropdown
          placeHolder="Select an Option"
          label="Basic uncontrolled example:"
          id="Basicdrop1"
          ariaLabel="Basic dropdown example"
          options={[
            { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
            { key: 'A', text: 'Option a', title: 'I am option a.' },
            { key: 'B', text: 'Option b' },
            { key: 'C', text: 'Option c', disabled: true },
            { key: 'D', text: 'Option d' },
            { key: 'E', text: 'Option e' },
            { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
            { key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
            { key: 'F', text: 'Option f' },
            { key: 'G', text: 'Option g' },
            { key: 'H', text: 'Option h' },
            { key: 'I', text: 'Option i' },
            { key: 'J', text: 'Option j' }
          ]}
        />

        <Dropdown
          placeHolder="Select options"
          label="Multi-Select uncontrolled example:"
          defaultSelectedKeys={['Apple', 'Banana', 'Orange']}
          multiSelect
          options={[
            { key: 'Header2', text: 'Fruits', itemType: DropdownMenuItemType.Header },
            { key: 'Apple', text: 'apple' },
            { key: 'Banana', text: 'banana' },
            { key: 'Orange', text: 'orange', disabled: true },
            { key: 'Grape', text: 'grape', disabled: true },
            { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
            { key: 'Header3', text: 'Lanuages', itemType: DropdownMenuItemType.Header },
            { key: 'English', text: 'english' },
            { key: 'French', text: 'french' },
            { key: 'Germany', text: 'germany' }
          ]}
        />


            </header>
        );
    }
}