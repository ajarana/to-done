# task-labels



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute | Description | Type    | Default     |
| ------------------ | --------- | ----------- | ------- | ----------- |
| `labels`           | --        |             | `any[]` | `undefined` |
| `selectedLabelIds` | --        |             | `any[]` | `[]`        |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `taskLabelsSelected` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [task-form](../task-form)

### Depends on

- [tdn-ui-icon](../design-system/icon)

### Graph
```mermaid
graph TD;
  task-labels --> tdn-ui-icon
  task-form --> task-labels
  style task-labels fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
