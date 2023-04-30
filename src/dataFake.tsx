import {IIconReaction, IMessage} from './types';

const dataListMess: IMessage[] = [
  {
    id: 27,
    text: 'Hello 123 123',
    isSend: true,
    files: [
      'https://anhdep123.com/wp-content/uploads/2021/05/gai-xinh-di-hoc-dep.jpg',
    ],
  },
  {
    id: 28,
    text: 'Hello 123 123',
    isSend: false,
    files: [
      'https://anhdep123.com/wp-content/uploads/2021/05/gai-xinh-di-hoc-dep.jpg',
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/06/20/thieu-nu-ha-thanh-xinh-xan-dien-do-goi-cam-thieu-dot-moi-anh-nhindocx-1624197299847.png',
      'https://anhdep123.com/wp-content/uploads/2021/05/gai-xinh-di-hoc-dep.jpg',
    ],
    reply:
      'sds dsd sd sd sd sd sd s s ds ds s d s sd s ds dsdsd sdsds dsds ds sd ',
  },
  {
    id: 29,
    text: 'Cô ấy độc thân nhưng không có nghĩa bạn có cửa',
    isSend: false,
    reactions: [
      'https://www.citypng.com/public/uploads/preview/-11591915661tecq0pfbfb.png',
      'https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png',
    ],
  },
  {
    id: 30,
    text: 'Hello 123 123',
    isSend: false,
    reactions: [
      'https://www.citypng.com/public/uploads/preview/-11591915661tecq0pfbfb.png',
    ],
  },
  {
    id: 31,
    text: 'Cô ấy độc thân nhưng không có nghĩa bạn có cửa 🙂',
    isSend: true,
    files: [
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/06/20/thieu-nu-ha-thanh-xinh-xan-dien-do-goi-cam-thieu-dot-moi-anh-nhindocx-1624197299847.png',
    ],
    reactions: [
      'https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png',
    ],
    reply:
      'sds dsd sd sd sd sd sd s s ds ds s d s sd s ds dsdsd sdsds dsds ds sd ',
  },
  {
    id: 32,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 33,
    text: 'Cô ấy độc thân,nhưng không có nghĩa bạn có cửa 🙂',
    isSend: false,
    reactions: [
      'https://www.citypng.com/public/uploads/preview/-11591915661tecq0pfbfb.png',
      'https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png',
    ],
    reply:
      'sds dsd sd sd sd sd sd s s ds ds s d s sd s ds dsdsd sdsds dsds ds sd ',
  },
  {
    id: 34,
    text: 'Hello 123 123',
    isSend: true,
  },
  {
    id: 1,
    text: 'Hello 123 123',
    isSend: true,
    files: [
      'https://anhdep123.com/wp-content/uploads/2021/05/gai-xinh-di-hoc-dep.jpg',
    ],
  },
  {
    id: 2,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 3,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 4,
    text: 'Hello 123 123',
    isSend: true,
  },
  {
    id: 5,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 6,
    text: 'Hello 123 123',
    isSend: true,
  },
  {
    id: 7,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 8,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 9,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 10,
    text: 'Hello 123 123',
    isSend: true,
  },
  {
    id: 11,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 12,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 13,
    text: 'Hello 123 123',
    isSend: true,
  },
  {
    id: 14,
    text: 'Hello 123 123',
    isSend: true,
  },
  {
    id: 15,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 16,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 17,
    text: 'Hello 123 123',
    isSend: true,
  },
  {
    id: 18,
    text: 'Hello 123 123',
    isSend: false,
  },
  {
    id: 19,
    text: 'Hello 123 123',
    isSend: true,
    files: [
      'https://anhdep123.com/wp-content/uploads/2021/05/gai-xinh-di-hoc-dep.jpg',
    ],
    reply:
      'sds dsd sd sd sd sd sd s s ds ds s d s sd s ds dsdsd sdsds dsds ds sd ',
  },
  {
    id: 20,
    text: 'Hello 123 123',
    isSend: false,
    files: [
      'https://anhdep123.com/wp-content/uploads/2021/05/gai-xinh-di-hoc-dep.jpg',
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/06/20/thieu-nu-ha-thanh-xinh-xan-dien-do-goi-cam-thieu-dot-moi-anh-nhindocx-1624197299847.png',
      'https://anhdep123.com/wp-content/uploads/2021/05/gai-xinh-di-hoc-dep.jpg',
    ],
  },
  {
    id: 21,
    text: 'Cô ấy độc thân nhưng không có nghĩa bạn có cửa',
    isSend: false,
    reactions: [
      'https://www.citypng.com/public/uploads/preview/-11591915661tecq0pfbfb.png',
      'https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png',
    ],
  },
  {
    id: 22,
    text: 'Hello 123 123',
    isSend: false,
    reactions: [
      'https://www.citypng.com/public/uploads/preview/-11591915661tecq0pfbfb.png',
    ],
    reply:
      'sds dsd sd sd sd sd sd s s ds ds s d s sd s ds dsdsd sdsds dsds ds sd ',
  },
  {
    id: 23,
    text: 'Cô ấy độc thân nhưng không có nghĩa bạn có cửa 🙂',
    isSend: true,
    files: [
      'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/06/20/thieu-nu-ha-thanh-xinh-xan-dien-do-goi-cam-thieu-dot-moi-anh-nhindocx-1624197299847.png',
    ],
    reactions: [
      'https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png',
    ],
  },
  {
    id: 24,
    text: 'Hello 123 123',
    isSend: false,
    reply:
      'sds dsd sd sd sd sd sd s s ds ds s d s sd s ds dsdsd sdsds dsds ds sd ',
  },
  {
    id: 25,
    text: 'Cô ấy độc thân,nhưng không có nghĩa bạn có cửa 🙂',
    isSend: false,
    reactions: [
      'https://www.citypng.com/public/uploads/preview/-11591915661tecq0pfbfb.png',
      'https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png',
    ],
  },
  {
    id: 26,
    text: 'Hello 123 123',
    isSend: true,
  },
];

const dataListReact: IIconReaction[] = [
  {
    id: 1,
    uri: 'https://cdn.iconscout.com/icon/free/png-256/haha-2387660-1991060.png',
  },
  {
    id: 2,
    uri: 'https://w7.pngwing.com/pngs/191/791/png-transparent-facebook-reaction-sad-hd-logo.png',
  },
  {
    id: 3,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDz_81IWTU4asyf9EFfKTC37S2POhnEnpNWw&usqp=CAU',
  },
  {
    id: 4,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdxXZg2304SCDRgyu18hiUCBteKwGDKcbPQ&usqp=CAU',
  },
  {
    id: 5,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRq4THBRJEXoXR_0MZ2huFOVwC8NAnC68lA&usqp=CAU',
  },
  {
    id: 6,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi35CxPTgOF1p2S_70F33_guzN4eGeLRKpBg&usqp=CAU',
  },
];

export {dataListMess, dataListReact};
