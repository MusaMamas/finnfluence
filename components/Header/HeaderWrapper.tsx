"use client";

import { useModal } from "../../context/ModalContext";
import Header from "./Header";

export default function HeaderWrapper() {
  const { openModal } = useModal();
  return <Header onOpenModal={openModal} />;
}