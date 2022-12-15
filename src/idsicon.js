import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Socialids = (props) => {
	const { fbid, instaid, twitid, gitid } = props;
	var a,b,c,d;
	if (instaid!==""){
		a = <li className="dib mr3 grow-large"><SocialIcon url={`http://instagram.com/${instaid}`} bgColor="black" fgColor="white" /></li>;
		
	}
	else{ a = '';}
	if (fbid !== '' ){
		 b = <li className="dib mr3 grow-large"><SocialIcon url={`http://facebook.com/${fbid}`} bgColor="black" fgColor="white" /></li>; 
	}
	else{
		 b='';
	}
	if (twitid !== '' ){
		 c = <li className="dib mr3 grow-large"><SocialIcon url={`http://twitter.com/${twitid}`} bgColor="black" fgColor="white" /></li>; 
	}
	else{
		 c='';
	}
	if (gitid !== '' ){
		 d = <li className="dib mr3 grow-large"><SocialIcon url={`http://github.com/${gitid}`} bgColor="black" fgColor="white" /></li>; 
	}
	else{
		 d='';
	}
	const s=<div><ul>{a}{b}{c}{d}</ul></div>;
	return (s);	
}



export default Socialids;