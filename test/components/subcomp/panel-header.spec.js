import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import PanelHeader                from '../../../src/components/subcomp/panel-header';

describe("<PanelHeader />", () => {
    it("Renders all heading labels", () => {
        const wrapper = shallow(<PanelHeader />);
        const texts   = wrapper.find('h5').map(node => node.text());

        expect(texts).to.eql([
            'Changelist / Build', 'Owner', 'Time Started',
            'State','Metrics','Build','Unit Test','Functional Test'
        ]);
    });
});
