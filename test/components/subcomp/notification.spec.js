import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import Notification               from '../../../src/components/subcomp/notification';
import Utils                      from '../../../src/components/utils/utils';

describe("<Notification />", () => {

    const testObject = {
        type    : "demo",
        title   : "demo title",
        content : "demo body"
    };

    it("Notification sets styles based on notification type correctly", () => {

        const wrapper = shallow(<Notification {...testObject} />);

        expect(wrapper.hasClass("notification-container")).to.equal(true);

        expect(wrapper.find(`.notify-${testObject.type}`)).to.have.length(1);

        expect(wrapper.find('.heading')).to.have.length(1);

        expect(wrapper.find('.content')).to.have.length(1);

    });

    it("Notification sets notification title correctly", () => {

        const wrapper = shallow(<Notification {...testObject} />);
        const heading = wrapper.find('.title').first();

        expect(heading.text().trim()).to.equal(testObject.title);

    });

    it("Notification sets notification body correctly", () => {

        const wrapper = shallow(<Notification {...testObject} />);

        expect(wrapper.find('.content').first().text()).to.equal(testObject.content);

    });

    it("Notification has close icon", () => {

        const wrapper = shallow(<Notification {...testObject} />);

        expect(wrapper.find('.material-icons.close').first().text()).to.equal("clear");

    });


    it("Passed close handler prop get called correctly", () => {

        let count = { c : 0 };
        const dummyClose =() => count.c = count.c + 1

        const wrapper = shallow(<Notification {...testObject} closeNotification = {dummyClose} />);

        const closeIcon = wrapper.find('.material-icons.close').first();

        closeIcon.simulate('click');

        expect(count.c).to.equal(1);
    });


    it("Renders success notification type icon correctly", () => {

        testObject["type"] ="success";

        const wrapper = shallow(<Notification {...testObject} />);

        expect(wrapper.find(`.notify-success`)).to.have.length(1);

        expect(wrapper.find('.material-icons').first().text()).to.equal(Utils.iconMap[testObject.type]);

    });

    it("Renders info notification type icon correctly", () => {

        testObject["type"] ="info";

        const wrapper = shallow(<Notification {...testObject} />);

        expect(wrapper.find(`.notify-info`)).to.have.length(1);

        expect(wrapper.find('.material-icons').first().text()).to.equal(Utils.iconMap[testObject.type]);

    });

    it("Renders error notification type icon correctly", () => {

        testObject["type"] ="error";

        const wrapper = shallow(<Notification {...testObject} />);

        expect(wrapper.find(`.notify-error`)).to.have.length(1);

        expect(wrapper.find('.material-icons').first().text()).to.equal(Utils.iconMap[testObject.type]);

    });

});
