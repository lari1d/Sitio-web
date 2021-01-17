import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

/* Material Components */
import {
  List,
  ListItem,
  ListItemMeta,
} from '@rmwc/list';
import { CardActionIcon } from '@rmwc/card';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
} from '@rmwc/dialog';
import { Typography } from '@rmwc/typography';

/* Custom Components */
import SocialButtons from './social-buttons';

/* Styled Components */
import Align from '../../styles/emotion/align';

/* Styles */
import '../../styles/components/qr.scss';

/* Colors */
import colors from '../../styles/colors';

const SocialShareButton = ({ url, inline }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>
          Compartir
        </DialogTitle>
        <DialogContent>
          <SocialButtons
            url={url}
          />
          <div className="qr-code--container">
            <Typography
              use="subtitle1"
              tag="div"
            >
              Escanea el código QR
            </Typography>
            <QRCode
              value={url}
              fgColor={colors.fortnightlyPurple}
              renderAs="svg"
              size={100}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <DialogButton action="close">
            Cerrar
          </DialogButton>
        </DialogActions>
      </Dialog>

      {inline ? (
        <List twoLine>
          <ListItem>
            Compartir
            <ListItemMeta
              icon="share"
              onClick={() => setOpen(!open)}
            />
          </ListItem>
        </List>
      ) : (
        <CardActionIcon
          onClick={() => setOpen(!open)}
          icon="share"
        />
      )}
    </>
  )
};

SocialShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

export default SocialShareButton;
