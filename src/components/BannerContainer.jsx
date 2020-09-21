import React from "react";

export default function BannerContainer(props) {
	let marginTop = props.marginTop ? props.marginTop : 0
	let textAlign = props.textAlign ? props.textAlign : "left"


	return (
		<div className="banner-container" style={{textAlign, marginTop}}>
			{props.verticalAlign === "bottom" &&
				<img src={props.src} alt="Banner" className="img-fluid" />
			}
			<p className="h3">
				<em>{props.top}<br />{props.bottom}.</em>
			</p>
			{props.verticalAlign === "top" &&
				<img src={props.src} alt="Banner" className="img-fluid" />
			}

		</div>
	)
}