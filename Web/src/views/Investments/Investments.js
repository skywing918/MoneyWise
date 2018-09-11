import React, { Component } from 'react';
import { Row } from 'reactstrap';

import CardInvestment from './CardInvestment'

class Investments extends Component {
    
    render() {
        const cardList = [
            {
                id: 0,
                name: '货币基金',
                total: 400,
                recordList: [
                    { id: 1, name: '基金一号', price: 300 },
                    { id: 2, name: '基金二号', price: 100 }
                ]
            },
            {
                id: 3,
                name: '你我贷',
                total: 200,
                recordList: [
                    { id: 4, name: '20180031', price: 100 },
                    { id: 5, name: '20180032', price: 100 }
                ]
            }

        ]
        return (
            <div className="animated fadeIn">
                <Row>
                    <CardInvestment investments={cardList} />
                </Row>
            </div>
        );
    }
}

export default Investments;
