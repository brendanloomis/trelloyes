import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import render from 'react-test-renderer';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = render
            .create(<Card title="Card 1" content="content" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});