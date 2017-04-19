import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import Utils                      from '../../../../src/utils/Utility';
import FunctionalTestBox          from '../../../../src/components/common/box/functional-test-box';

describe("<FunctionalTestBox />", () => {

    it("FunctionalTestBox has correct styles set", () => {
        const testData = Utils.getTestObject("functionalTestCases", "success")
        const wrapper  = shallow(<FunctionalTestBox functionalTest = {testData} />);
        expect(wrapper.hasClass(`box box-${testData.currentState}`)).to.equal(true);
    });

    it("FunctionalTestBox has correct box label set", () => {
        const testData = Utils.getTestObject("functionalTestCases", "success")
        const wrapper  = shallow(<FunctionalTestBox functionalTest = {testData} />);
        expect(wrapper.find('.box-label').text()).to.equal('Functional Test');
    });

    it("FunctionalTestBox sets progress bar progress correctly", () => {
        const testData = Utils.getTestObject("functionalTestCases", "success")
        const wrapper  = shallow(<FunctionalTestBox functionalTest = {testData} />);
        expect(wrapper.find('ProgressBar').prop('currentProgress')).to.equal(testData.covered);
    });

    it("FunctionalTestBox sets showDetailModal handler correctly", () => {
        const testData = Utils.getTestObject("functionalTestCases", "success")

        let count = { c : 0 };
        const showDetailModal = () => count.c = count.c + 1

        const wrapper  = shallow(
            <FunctionalTestBox
                functionalTest  = {testData}
                showDetailModal = {showDetailModal}
            />
        );

        wrapper.simulate('click');
        expect(count.c).to.equal(1);
    });

});
