import onepiece from ".././one-piece.jpg";
import naruto from ".././naruto.jpg";
import gintama from ".././gintama.jpeg";
import nanatsu from ".././nanatsu.jpg";
import akame from ".././akame.jpg";
import oneouts from ".././outs.jpg";
import yowa from ".././yowa.jpg";
import note from ".././death.jpg";
import doraemon from ".././doraemon.jpg";
import ghoul from ".././ghoul.jpg";
import sinchan from ".././sinchan.jpg";
import conan from ".././conan.jpg";

const sliders = [
  {
    id: 1,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "one-piece",
    src: "/one-piece.jpg",
  },
  {
    id: 2,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "one-outs",
    src: "/outs.jpg",
  },
  {
    id: 3,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "naruto",
    src: "/naruto.jpg",
  },
  {
    id: 4,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "sinchan",
    src: "/sinchan.jpg",
  },
  {
    id: 5,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Nanatsu no Taizai",
    src: "/nanatsu.jpg",
  },
  {
    id: 6,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Doraemon",
    src: "/doraemon.jpg",
  },
  {
    id: 7,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Akame ga Kill",
    src: "/akame.jpg",
  },
  {
    id: 8,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Ginama",
    src: "/gintama.jpeg",
  },
  {
    id: 9,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Tokyo Ghoul",
    src: "/ghoul.jpg",
  },
  {
    id: 10,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Yowamusi Pedal",
    src: "/yowa.jpg",
  },
  {
    id: 11,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Death Note",
    src: "/death.jpg",
  },
  {
    id: 12,
    description:
      "        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, reprehenderit placeat corporis facere eligendi consectetur. Modi illum unde ad iusto sit reprehenderit ipsa accusantium nam debitis dicta. Alias cupiditate magnam repudiandae, atque eligendi, odio error, sint iusto optio iure eos! Error id magni quos. Quam excepturi illum dolores rem, itaque, voluptas, libero voluptatum reprehenderit sint a quia eum non quis assumenda commodi voluptatem iure quasi quaerat et omnis dicta! Odit, itaque, rerum praesentium odio perferendis dolor reiciendis mollitia esse illo numquam id minus expedita. Enim nisi eius fugiat veniam ratione sunt error consectetur, quia necessitatibus aliquid eos temporibus porro nemo.",
    name: "Conan",
    src: "./conan.jpg",
  },
];

export default sliders;
