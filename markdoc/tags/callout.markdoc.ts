import { CallOutCollaps } from '../../callout/callOutCollaps';
import { NewCallOut } from '../../callout/newCallout';
import {Callout} from '../../components';


export const callout = {
  render: Callout,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};

export const newCallOut = {
  render: NewCallOut,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
export const callOutCollaps = {
  render: CallOutCollaps,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
