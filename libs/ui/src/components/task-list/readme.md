# task-list



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type    | Default |
| -------- | --------- | ----------- | ------- | ------- |
| `labels` | --        |             | `any[]` | `[]`    |
| `tasks`  | --        |             | `any[]` | `[]`    |


## Dependencies

### Depends on

- [td-label](../td-label)
- [td-task](../td-task)
- [td-heading](../td-heading)
- [td-date](../td-date)

### Graph
```mermaid
graph TD;
  task-list --> td-label
  task-list --> td-task
  task-list --> td-heading
  task-list --> td-date
  td-task --> tdn-ui-icon
  td-date --> tdn-ui-icon
  style task-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
