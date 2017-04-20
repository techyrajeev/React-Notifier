import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import Notification               from '../../../src/components/subcomp/notification';
import NotificationList           from '../../../src/components/subcomp/notification-list';
import Utils                      from '../../../src/components/utils/utils';

describe("<NotificationList />", () => {

    const notificationData = [
        {
            type    : "success",
            title   : "success title",
            content : "success body"
        },
        {
            type    : "info",
            title   : "info title",
            content : "info body"
        },
        {
            type    : "error",
            title   : "error title",
            content : "error body"
        }
    ];

    it("NotificationList sets styles correctly", () => {

        const wrapper = shallow( <NotificationList data={notificationData} />);

        expect(wrapper.hasClass("notification-list-container")).to.equal(true);

        expect(wrapper.find('.notification-list')).to.have.length(1);

    });

    it("NotificationList renders correct No of notifications based on provided data", () => {

        const wrapper = shallow( <NotificationList data={notificationData} />);

        expect(wrapper.find(`Notification`)).to.have.length(notificationData.length);

    });

});
