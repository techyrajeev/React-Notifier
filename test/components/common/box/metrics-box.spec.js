import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import Utils                      from '../../../../src/utils/Utility';
import MetricsBox                 from '../../../../src/components/common/box/metrics-box';

describe("<MetricsBox />", () => {

    it("MetricsBox has correct styles set", () => {
        const metricsData  = Utils.getSuccessMetrics();
        const wrapper  = shallow(<MetricsBox currentMetrics = {metricsData} />);

        expect(wrapper.hasClass(`box box-${metricsData.currentState}`)).to.equal(true);
    });

    it("MetricsBox has correct box label set", () => {
        const metricsData  = Utils.getSuccessMetrics();
        const wrapper  = shallow(<MetricsBox currentMetrics = {metricsData} />);

        expect(wrapper.find('.box-label').text()).to.equal('Metrics');
    });


    it("MetricsBox has 4 arrow components", () => {
        const metricsData  = Utils.getSuccessMetrics();
        const wrapper  = shallow(
            <MetricsBox currentMetrics  = {metricsData} />
        );
        expect(wrapper.find('Arrow').length).to.equal(4);
    });

    it("MetricsBox has 2 right arrow components", () => {
        const metricsData  = Utils.getSuccessMetrics();
        const wrapper  = shallow(
            <MetricsBox currentMetrics  = {metricsData} />
        );
        expect(wrapper.find('Arrow[dir="right"]').length).to.equal(2);
    });


    it("MetricsBox sets showDetailModal handler correctly", () => {
        const metricsData  = Utils.getSuccessMetrics();

        let count = { c : 0 };
        const showDetailModal = () => count.c = count.c + 1

        const wrapper  = shallow(
            <MetricsBox
                currentMetrics  = {metricsData}
                showDetailModal = {showDetailModal}
            />
        );

        wrapper.simulate('click');
        expect(count.c).to.equal(1);
    });


});
