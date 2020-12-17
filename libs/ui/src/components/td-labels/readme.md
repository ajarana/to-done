# td-labels



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description | Type    | Default |
| ---------------- | --------- | ----------- | ------- | ------- |
| `labels`         | --        |             | `any[]` | `[]`    |
| `selectedLabels` | --        |             | `any[]` | `[]`    |


## Dependencies

### Used by

 - [task-list](../task-list)
 - [td-task-details](../td-task-details)

### Depends on

- [td-label](../td-label)

### Graph
```mermaid
graph TD;
  td-labels --> td-label
  task-list --> td-labels
  td-task-details --> td-labels
  style td-labels fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
