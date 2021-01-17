import React from 'react';

// componentes
import { GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { Checkbox } from '@rmwc/checkbox';
import { CollapsibleList, SimpleListItem } from '@rmwc/list';

const MenuCategories = () => (
  <GridCell span={2} phone={4}>
    <Typography
      use="headline6"
      tag="p"
    >
      <strong>Edición</strong>

    </Typography>
    <CollapsibleList
      handle={(
        <SimpleListItem
          text="Primera edición"
          metaIcon="chevron_right"
        />
      )}
    >
      <SimpleListItem text={<Checkbox label="Diciembre-Noviembre" />} />
      <SimpleListItem text={<Checkbox label="2020" />} />
    </CollapsibleList>
    <CollapsibleList
      handle={(
        <SimpleListItem
          text="Ediciones"
                metaIcon="chevron_right"
        />
      )}
    >
      <SimpleListItem text={<Checkbox label="Tobala" />} />
      <SimpleListItem text={<Checkbox label="Mezcal espadín" />} />
    </CollapsibleList>
    <Typography
      use="headline6"
      tag="p"
    >

      <strong>Fecha</strong>
    </Typography>
    <Checkbox label=" 22/Diciembre/2020" />
    <Checkbox label="De 500 a 1000" />
    <Checkbox label="Más de 1000" />
  </GridCell>
);

export default MenuCategories;
