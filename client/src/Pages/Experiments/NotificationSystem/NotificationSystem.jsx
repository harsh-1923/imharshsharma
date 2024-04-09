import React, { useState, useEffect } from "react";
import "./NotificationSystem.css";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "sonner";

const NotificationList = [
  {
    tag: "Chat",
    items: [
      "This is a sample notification",
      "This is a sample notification",
      "This is a sample notification",
      "This is a sample notification",
    ],
  },

  {
    tag: "Orders",
    items: [
      "This is a sample notification",
      "This is a sample notification",
      "This is a sample notification",
    ],
  },
  {
    tag: "Delivery",
    items: ["This is a sample notification", "This is a sample notification"],
  },
];

const NotificationSystem = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="exp-notification">
      <button onClick={() => setOpen(!open)}>Toggle</button>
      <Toaster position="top-right" />
      <button onClick={() => toast("This is a toast")}>Toast</button>
      <NotificationCenter open={open} setOpen={setOpen}></NotificationCenter>

      <motion.div
        className="test"
        drag={"x"}
        dragSnapToOrigin
        dragElastic={0.1}
      >
        Hey
      </motion.div>
    </div>
  );
};

const NotificationGroup = ({ group }) => {
  const [groupExpanded, setGroupExpanded] = useState(true);
  const [allowScroll, setAllowScroll] = useState(false);
  useEffect(() => {
    if (allowScroll) {
      const handleTouch = (event) => {
        event.stopPropagation();
      };
      document.documentElement.addEventListener("touchmove", handleTouch);
      return () => {
        document.documentElement.removeEventListener("touchmove", handleTouch);
      };
    }
  }, [allowScroll]);
  return (
    <motion.div
      drag={groupExpanded ? "x" : false}
      onDragStart={(event, info) => {
        setAllowScroll(Math.abs(info.delta.y) > Math.abs(info.delta.x));
      }}
      dragElastic={0.1}
      dragSnapToOrigin
      dragDirectionLock
      //   dragConstraints={{ left: 0, right: 400 }}
      onMouseEnter={() => setGroupExpanded(true)}
      //   onMouseLeave={() => setGroupExpanded(false)}
      className="nc-group"
    >
      <p>{group.tag}</p>
      {group.items.map((item, i) => (
        <NotificationChip
          groupExpanded={groupExpanded}
          key={i}
          idx={i}
          len={group.items.length}
          content={item}
        />
      ))}
    </motion.div>
  );
};

const NotificationChip = ({ content, groupExpanded, len, idx }) => {
  const getMargin = () => {
    if (groupExpanded) return "10px";
    if (idx == 0) return "0px";
    if (idx == 1) return "-80px";
    if (idx > 1) return "-100px";
    // if (idx > 0) return "-80px";
  };
  return (
    <motion.div
      style={{
        zIndex: len - idx,
        marginTop: "10px",
      }}
      data-state-exapanded={`${groupExpanded ? "true" : "false"}`}
      className="nc-chip"
    >
      {content} {idx}
    </motion.div>
  );
};

const NotificationCenter = ({ open }) => {
  return (
    <>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="notification-center-wrap"
        >
          <div className="notification-center">
            <h3 className="nc-title">Notification Center</h3>
            <div className="nc-controls"></div>
          </div>
          <div className="nc-notifications">
            {NotificationList.map((notificationGroup, i) => (
              <NotificationGroup
                group={notificationGroup}
                key={notificationGroup.tag}
              />
            ))}

            {Array(10)
              .fill()
              .map((item, idx) => (
                <motion.div
                  drag={"x"}
                  dragSnapToOrigin
                  className="notification-test"
                >
                  s
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default NotificationSystem;
