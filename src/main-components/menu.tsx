import { text } from "@core";
import { observer } from "mobx-react";
import { Icon, Nav, Panel, PanelType } from "office-ui-fabric-react";
import * as React from "react";

@observer
export class MenuView extends React.Component<{
	items: {
		name: string;
		onClick: () => void;
		icon: string;
		key: string;
		url: string;
	}[];
	isVisible: boolean;
	currentName: string;
	onDismiss: () => void;
}> {
	public render() {
		return (
			<div className="menu-component">
				<div className="visible-lg visible-md icon-list">
					{this.props.items.map((item, index) => {
						return (
							<div
								key={index}
								className={
									"item " +
									(item.name === this.props.currentName
										? "selected"
										: "")
								}
								onClick={item.onClick}
								data-testid="menu-item-bg"
							>
								<Icon iconName={item.icon} />
								<span className="text">{text(item.name)}</span>
							</div>
						);
					})}
				</div>
				<Panel
					className="menu"
					isLightDismiss={true}
					isOpen={this.props.isVisible}
					type={PanelType.smallFixedNear}
					onDismiss={this.props.onDismiss}
					hasCloseButton={false}
					data-testid="menu-sd"
				>
					<Nav
						groups={[
							{
								links: this.props.items.map(x => {
									return {
										icon: x.icon,
										name: text(x.name),
										key: x.key,
										url: x.url,
										onClick: x.onClick,
										"data-testid": "menu-item-sd"
									};
								})
							}
						]}
						selectedKey={this.props.currentName}
					/>
				</Panel>
			</div>
		);
	}
}
