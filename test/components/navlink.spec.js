import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { NavLink } from 'react-router-dom';
import Splash from './splash';

describe("<NavLink  />", () => {
    it("1.contains correct passed prop", () => {
        const comp = (
            <NavLink to="/home"  className={"test"}>
                NaveLink Test
            </NavLink>
        );
        const wrapper
            = shallow( comp );
        expect(wrapper.instance().props.to).to.equal("/home");
    });
});

describe("<Splash  />", () => {
    it("2.contains correct passed prop", () => {
        const comp = (
            <Splash />
        );
        const wrapper = shallow( comp );

        expect(wrapper.find(NavLink).first().props().to).to.equal("/home");
    });
});
