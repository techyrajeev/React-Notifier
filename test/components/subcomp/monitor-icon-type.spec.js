import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import MonitorIconType            from '../../../src/components/subcomp/monitor-icon-type';

describe("<MonitorIconType />", () => {

    it("Renders icon type element correctly", () => {
        const wrapper = shallow(<MonitorIconType type={"firewall"} />);
        expect(wrapper.type()).to.equal('i');
    });

    it("Renders monitor firewal icon", () => {
        const wrapper = shallow(<MonitorIconType type={"firewall"} />);
        expect(wrapper.text()).to.equal('line_style');
    });

    it("Renders monitor build icon", () => {
        const wrapper = shallow(<MonitorIconType type={"build"} />);
        expect(wrapper.text()).to.equal('desktop_mac');
    });

});
