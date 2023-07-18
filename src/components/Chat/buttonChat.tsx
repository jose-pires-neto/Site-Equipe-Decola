import Image from 'next/image';
import { Popover } from '@headlessui/react';
import { Chat } from './chat';
import iconChat from '../../assets/icons/chatIcon.svg';
import { ContainerText } from './ButtonChatStyle';

export function ButtonChat() {
  return (
    <Popover className="chatPopover">
      {
        <Popover.Panel>
          <Chat />
        </Popover.Panel>
      }
      <Popover.Button className="buttonChat">
        {/*  Classe editável no globalStyle */}
        <Image src={iconChat} alt="ícone de chat" />
        <ContainerText>
          <span></span>
          Chat
        </ContainerText>
      </Popover.Button>
    </Popover>
  );
}
