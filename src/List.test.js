import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';
import renderer, { create } from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {    const div = document.createElement('div');
        const cards = [
            <Card />,
            <Card />
        ];
        ReactDOM.render(<List cards={cards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const cards = [
            <Card id='1' title='Card1' content='content1' />,
            <Card id='2' title='Card2' content='content2' />
        ];
        const tree = renderer
            .create(<List header="header1" cards={cards} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});