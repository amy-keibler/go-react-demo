import "jest-enzyme";
import { mount } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as React from 'react';

import * as Adapter from 'enzyme-adapter-react-16';

import { GoComponent } from "./gocomponent"

Enzyme.configure({ adapter: new Adapter() });

describe("GoComponent", () => {
    it("should update the state with a click", () => {
        const wrapper = mount(<GoComponent gotitle="Test Component" />);

        wrapper.find('button.increment').first().simulate("click");

        expect(wrapper.find('.count-div').first().text()).toEqual("1");
    });
});
