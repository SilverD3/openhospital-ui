export type TDashboardCardProps = {
  title: string;
  avatar?: React.ReactNode;
  actions: TDashboardCardOptionActions;
  subtitle?: string;
  cardRef?: React.RefObject<any>;
  sizeChangeHandler?: (width: number, height: number) => void;
};

export type TDashboardDownloadProps = {
  action: JSX.Element;
};

export type TDashboardCardOptionActions = {
  onExpand?: () => void;
  onClose?: () => void;
  onDownload?: TDashboardDownloadProps[];
};