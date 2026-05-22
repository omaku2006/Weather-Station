import * as Popover from '@radix-ui/react-popover';
import { Info } from 'lucide-react';
import './InfoPopover.css';

type Props = {
  nearestCity?: string;
  region?: string;
  country?: string;
  lat?: string;
  lon?: string;
  displayCity?: string;
  msg: string;
};

export const InfoPopover = ({
  nearestCity,
  region,
  country,
  lat,
  lon,
  displayCity,
  msg,
}: Props) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Info size={16} className="info-i" />
    </Popover.Trigger>

    <Popover.Portal>
      <Popover.Content side="top" align="center" sideOffset={8} className="popover-box">
        <div className="title">Weather source</div>

        {displayCity && (
          <div className="row main">
            Showing:{' '}
            <b>
              {displayCity}, {country}
            </b>
          </div>
        )}

        <div className="row">
          Nearest station: <b>{nearestCity}</b>
          <br />
          Region: {region}
        </div>

        <div className="coords">
          {lat}°N · {lon}°E
        </div>
        <br />
        <div className="message">{msg}</div>

        <Popover.Arrow className="arrow" width={12} height={6} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
