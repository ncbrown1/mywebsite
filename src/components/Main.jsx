'use strict';

import React from 'react';
import { Image } from 'react-bootstrap';

var imgStyle = {
    'float': 'left',
    margin: '0 1em 0 0'
}

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>{"I'm Nick Brown, the Software Developer."}</h1>
                <hr/>
                <Image src="img/prophoto.jpg" rounded style={imgStyle} />
                <p>
                Bacon ipsum dolor amet kielbasa tail capicola pork chop, turkey venison meatball pancetta. Prosciutto shoulder shank short ribs beef frankfurter, chuck brisket pork tri-tip. Bresaola chuck cupim pig. Capicola landjaeger bacon tongue brisket, prosciutto flank cupim filet mignon pork jowl pig beef pastrami. Pig tongue pork loin swine fatback turducken capicola alcatra frankfurter prosciutto filet mignon leberkas shank pork chop biltong.
                </p>
                <p>
                Landjaeger jerky boudin bacon andouille chicken pig, pancetta pork belly. Sirloin brisket porchetta ground round, fatback swine spare ribs pork chop flank pork loin meatloaf ribeye short loin. Ground round drumstick alcatra pork loin tail landjaeger. Pork rump pork chop, turducken t-bone chuck shankle kevin porchetta ribeye venison. Prosciutto tail hamburger ground round pancetta pork chop brisket. Pork chop ham hock tongue picanha bacon tri-tip pork loin bresaola meatloaf.
                </p>
                <p>
                Rump pork chop fatback, swine landjaeger chuck ball tip ham cow salami ham hock. Doner brisket boudin, jowl prosciutto fatback beef ribs strip steak picanha. Pork loin spare ribs ground round, turducken short ribs frankfurter cow doner bresaola chicken brisket turkey venison. Ham hock alcatra jowl ball tip, tenderloin turducken pork chop sirloin meatloaf sausage shank spare ribs short ribs. Capicola fatback prosciutto ball tip.
                </p>
                <p>
                Pastrami meatball boudin leberkas prosciutto ham hock. Tongue flank cow sausage spare ribs shank hamburger short loin shoulder doner. Cow chuck salami, fatback pork ball tip tenderloin pancetta ribeye venison rump. Pig sausage shankle shoulder, t-bone frankfurter kevin pork porchetta ribeye leberkas short loin meatloaf boudin kielbasa. Cupim cow bresaola pork, chicken hamburger jowl filet mignon bacon short loin shankle meatloaf prosciutto. Porchetta ribeye meatball, turkey capicola sirloin kevin boudin hamburger pancetta tail salami pork belly.
                </p>
                <p>
                Pancetta ground round tenderloin pork loin sirloin shoulder. Spare ribs leberkas rump frankfurter, boudin porchetta flank kevin prosciutto pastrami shankle bacon meatball turkey tri-tip. Fatback jowl ham frankfurter. Kielbasa capicola cupim meatloaf ball tip, pork chop ground round. Tenderloin kielbasa tail tri-tip. Cow jowl jerky pork belly pancetta pastrami ball tip swine shankle boudin sausage shoulder ham hock ground round.
                </p>
            </div>
        );
    }
}