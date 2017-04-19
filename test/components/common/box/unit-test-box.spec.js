import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import Utils                      from '../../../../src/utils/Utility';
import UnitTestBox                from '../../../../src/components/common/box/unit-test-box';

describe("<UnitTestBox />", () => {

    it("UnitTestBox has correct styles set", () => {
        const testData = Utils.getTestObject("unitTestCases", "success")
        const wrapper  = shallow(<UnitTestBox unitTest = {testData} />);
        expect(wrapper.hasClass(`box box-${testData.currentState}`)).to.equal(true);
    });

    it("UnitTestBox has correct box label set", () => {
        const testData = Utils.getTestObject("unitTestCases", "success")
        const wrapper  = shallow(<UnitTestBox unitTest = {testData} />);
        expect(wrapper.find('.box-label').text()).to.equal('Unit Test');
    });

    it("UnitTestBox sets progress bar progress correctly", () => {
        const testData = Utils.getTestObject("unitTestCases", "success")
        const wrapper  = shallow(<UnitTestBox unitTest = {testData} />);
        expect(wrapper.find('ProgressBar').prop('currentProgress')).to.equal(testData.covered);
    });

    it("UnitTestBox sets showDetailModal handler correctly", () => {
        const testData = Utils.getTestObject("unitTestCases", "success")

        let count = { c : 0 };
        const showDetailModal = () => count.c = count.c + 1

        const wrapper  = shallow(
            <UnitTestBox
                unitTest        = {testData}
                showDetailModal = {showDetailModal}
            />
        );

        wrapper.simulate('click');
        expect(count.c).to.equal(1);
    });

});
