import { useState } from "react";
import {
  H1,
  H2,
  Text,
  Button,
  StackLayout,
  FlexLayout,
  Card,
  Pill,
  Badge,
  Avatar,
  StatusIndicator,
  Banner,
  BannerContent,
  BannerActions,
  Checkbox,
  CheckboxGroup,
  RadioButton,
  RadioButtonGroup,
  Switch,
  CircularProgress,
  LinearProgress,
  Spinner,
  Tooltip,
  Link,
  Divider,
  Tag,
} from "@salt-ds/core";

export function ComponentsPage() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchOn, setSwitchOn] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  return <Text>Components</Text>;
}
