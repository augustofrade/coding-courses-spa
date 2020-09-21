import React from "react";
import WarningIcon from '@material-ui/icons/Warning';

export default function InvalidRoute() {
	
	return (
		<div style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			textAlign: "center"
		}}>
			<WarningIcon style={{fontSize: "5em"}} />
			<h2 className="h1">Oops, nothing here !!</h2>
		</div>
	)
}