export type column = Record<string, any>;

export type row = Record<string, any>;

export type NewUser = Record<string, any>;

export interface CampaignData {
  campaign: string;
  type: string;
  visitors: number;
  contacts: number;
  companies: number;
  leads: number;
  value: number;
  logo: string;
}

export interface ExpenseData {
  direct: number;
  paid: number;
  social: number;
  other: number;
  total: number;
}

export type PieChartOption = {
  tooltip: {
    trigger: string;
  };

  legend?: {
    top: string;
    left?: string;
    right?: string;
    orient?: string;
    itemWidth?: number;
  };
  series: {
    right?: string;
    name: string;
    type: string;
    radius: [string, string];
    avoidLabelOverlap: boolean;
    label: {
      show: boolean;
      position: string;
      formatter: string;
    };
    itemStyle: {
      // borderRadius: number;
      borderColor: string;
      borderWidth: number;
    };
    emphasis: {
      label: {
        show: boolean;
        fontSize: number;
        fontWeight: string;
      };
    };
    labelLine: {
      show: boolean;
    };
    data: {
      value: number;
      name: string;
    }[];
  }[];
};
