import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import ProgressBar                from '../../../src/components/common/progress-bar';

describe("<ProgressBar />", () => {
    it("ProgressBar has correct styles set", () => {
        const wrapper = shallow(<ProgressBar currentProgress={0} currentProgressType="success" />);
        expect(wrapper.hasClass('progress')).to.equal(true);
    });

    it("ProgressBar has correct progress bar type set", () => {
        const progressBarType = "success";
        const wrapper = shallow(<ProgressBar currentProgress={0} currentProgressType={progressBarType} />);
        expect(
            wrapper
                .children()
                .first()
                .hasClass(`progress-bar-${progressBarType}`)
        ).to.equal(true);
    });

    it("ProgressBar progresses correctly", () => {
        const progress = 10;
        const wrapper = shallow(<ProgressBar currentProgress={progress} currentProgressType={"error"} />);

        expect(
            wrapper
                .children()
                .first()
                .props()
                .style
                .width
        ).to.equal(`${progress}%`);
    });

    it("ProgressBar has max and min range set correctly", () => {
        const progress = 80;
        const wrapper = shallow(<ProgressBar currentProgress={progress} currentProgressType={"error"} />);

        expect(
            wrapper
                .children()
                .first()
                .prop("aria-valuemax")
        ).to.equal('100');

        expect(
            wrapper
                .children()
                .first()
                .prop("aria-valuemin")
        ).to.equal('0');
    });
});
