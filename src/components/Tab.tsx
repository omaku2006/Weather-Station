import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HouseIcon } from '@phosphor-icons/react';

type TabProps = { isOpen: boolean; label: string };

const Tab: React.FC<TabProps> = ({ isOpen, label }) => {
  return (
    <div className="tabContainer" aria-hidden={!isOpen}>
      <HouseIcon size={32} color="#ffffff" weight="duotone" />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            key="label"
            className="tabLabel"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.18 }}
          >
            {label}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tab;
