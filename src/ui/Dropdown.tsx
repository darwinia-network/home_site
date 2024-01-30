import {
  FloatingPortal,
  Placement,
  offset,
  safePolygon,
  size,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";
import { Dispatch, PropsWithChildren, ReactElement, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  label: ReactElement;
  placement?: Placement;
  hoverable?: boolean;
  clickable?: boolean;
  sameWidth?: boolean;
  labelClassName?: string;
  childClassName?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Dropdown({
  isOpen,
  label,
  children,
  placement,
  hoverable,
  clickable,
  sameWidth,
  labelClassName,
  childClassName,
  setIsOpen,
}: PropsWithChildren<Props>) {
  const { refs, context, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(4),
      sameWidth
        ? size({
            apply({ rects, elements }) {
              Object.assign(elements.floating.style, { width: `${rects.reference.width}px` });
            },
          })
        : undefined,
    ],
    placement,
  });

  const { styles, isMounted } = useTransitionStyles(context, {
    initial: { transform: "translateY(-10px)", opacity: 0 },
    open: { transform: "translateY(0)", opacity: 1 },
    close: { transform: "translateY(-10px)", opacity: 0 },
  });

  const hover = useHover(context, { enabled: !!hoverable, handleClose: safePolygon() });
  const click = useClick(context, { enabled: !!clickable });
  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, dismiss]);

  return (
    <>
      <button className={labelClassName} ref={refs.setReference} {...getReferenceProps()}>
        {label}
        <Arrow isOpen={isOpen} />
      </button>

      {isMounted && (
        <FloatingPortal>
          <div style={floatingStyles} ref={refs.setFloating} {...getFloatingProps()} className="z-50">
            <div className={`${childClassName}`} style={styles} onClick={() => setIsOpen(false)}>
              {children}
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  );
}

function Arrow({ isOpen }: { isOpen?: boolean }) {
  return (
    <div
      className={`border-t-[0.3125rem] border-x-[0.25rem] border-x-transparent shrink-0 transition-[transform,color] ${
        isOpen ? "border-t-app-main" : "border-t-gray"
      }`}
      style={{ transform: isOpen ? "rotateX(180deg)" : "rotateX(0)" }}
    />
  );
}
