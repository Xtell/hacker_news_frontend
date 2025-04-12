import { ReactNode } from "react"

export interface LayoutProps {
  headerSlot?: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { headerSlot } = props;
}