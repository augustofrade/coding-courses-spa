import React from "react";
import QualityBox from "./QualityBox";
import GroupIcon from '@material-ui/icons/Group';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import DevicesIcon from '@material-ui/icons/Devices';


export default function () {
	
	return (
		<div className="card-deck" style={{marginTop: 30, marginBottom: 30}}>
			<QualityBox text="Capacited and qualified professionals">
				<GroupIcon style={{ fontSize: 40 }} />
			</QualityBox>
			<QualityBox text="High level education prestigied by over 20000 former students">
				<CheckCircleIcon style={{ fontSize: 40 }} />
			</QualityBox>
			<QualityBox text="Support ready to help you. Ask once, lose your doubts forever">
				<ContactSupportIcon style={{ fontSize: 40 }} />
			</QualityBox>
			<QualityBox text="Learn in any device anywhere with our multi-platform system">
				<DevicesIcon style={{ fontSize: 40 }} />
			</QualityBox>
		</div>
	)
}