import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import BuildBox                   from '../../../../src/components/common/box/build-box';

describe("<BuildBox />", () => {
    it("BuildBox has correct styles set", () => {

        const build = {
            currentState : 'success',
            finishTime   : new Date()
        };

        const wrapper = shallow(<BuildBox build = {build} />);
        expect(wrapper.hasClass(`box box-${build.currentState}`)).to.equal(true);
    });

    it("BuildBox has correct box label set", () => {
        const build = {
            currentState : 'success',
            finishTime   : new Date()
        };

        const wrapper = shallow(<BuildBox build = {build} />);
        expect(wrapper.find('.box-label').text()).to.equal('Build');
    });

    it("BuildBox renders correct no of system images", () => {

        const build = {
            currentState : 'success',
            finishTime   : new Date()
        };

        const wrapper = shallow(<BuildBox build = {build} />);
        expect(wrapper.find('.img-responsive')).to.have.length(2);
    });

    it("BuildBox sets showDetailModal handler correctly", () => {

        const build = {
            currentState : 'success',
            finishTime   : new Date()
        };

        let count = { c : 0 };
        const showDetailModal = () => count.c = count.c + 1

        const wrapper = shallow(
            <BuildBox
                build           = {build}
                showDetailModal = {showDetailModal}
            />
        );
        wrapper.simulate('click');
        expect(count.c).to.equal(1);
    });

});
