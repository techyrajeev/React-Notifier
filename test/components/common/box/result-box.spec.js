import React                      from 'react';
import { expect }                 from 'chai';
import { shallow, mount, render } from 'enzyme';
import ResultBox                  from '../../../../src/components/common/box/result-box';

describe("<ResultBox />", () => {
    it("ResultBox has correct styles set", () => {
        const wrapper = shallow(<ResultBox />);
        expect(wrapper.hasClass(`result-box`)).to.equal(true);
    });

    it("ResultBox has correct box label set", () => {
        const wrapper = shallow(<ResultBox />);

        expect(wrapper.find('h4').text()).to.equal('Result:');
    });

    it("ResultBox passes current prop correctly", () => {
        const data = {
            type      : 'build',
            state     : 'success',
            stateDesc : 'success desc'
        };

        const wrapper = shallow(<ResultBox {...data} />);
        expect(wrapper.find('BuildTypeResult').prop('state')).to.be.equal(data.state);
    });

    it("ResultBox renders current state correctly", () => {
        const data = {
            type      : 'firewall',
            state     : 'failed',
            stateDesc : 'Build failed'
        };

        const wrapper = shallow(<ResultBox {...data} />);
        const result  = wrapper.find('FirewallTypeResult');
        expect(result.shallow().find(`.state-label.state-${data.state}`).text()).to.contain(`${data.state}`);
    });


    it("ResultBox renders current state description correctly", () => {
        const data = {
            type      : 'build',
            state     : 'failed',
            stateDesc : 'Build failed'
        };

        const wrapper = shallow(<ResultBox {...data} />);
        const result  = wrapper.find('BuildTypeResult');
        expect(result.shallow().find(`.state-${data.state}.state-desc-label`).text()).to.be.equal(data.stateDesc);
    });



    it("ResultBox renders build result correctly", () => {
        const data = {
            type      : 'build',
            state     : 'success',
            stateDesc : 'success desc'
        };

        const wrapper = shallow(<ResultBox {...data} />);
        expect(wrapper.find('BuildTypeResult')).to.be.ok;
    });

    it("ResultBox renders firewall result correctly", () => {
        const data = {
            type      : 'firewall',
            state     : 'success',
            stateDesc : 'success desc'
        };

        const wrapper = shallow(<ResultBox {...data} />);
        expect(wrapper.find('FirewallTypeResult')).to.be.ok;
    });


});
