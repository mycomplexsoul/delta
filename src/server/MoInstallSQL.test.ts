import { MoInstallSQL } from "./MoInstallSQL";
import { equal } from "assert";
import { Task } from "../crosscommon/entities/Task";

const instance = new MoInstallSQL();

const normalizeString = (str: string) =>
  str
    .replace(new RegExp("\r?\n|\r", "gi"), "")
    .replace(new RegExp("\t", "gi"), "")
    .replace(new RegExp("  +", "gi"), " ");

/**
 * Method used to compare two strings and outputs base string with differences set as '@' to easily identify differences
 * @param base
 * @param expected
 */
const compareStrings = (base: string, expected: string) => {
  let compare: string = "";
  for (let i = 0; i < base.length; i++) {
    if (base[i] !== expected[i]) {
      compare += "@";
      console.log("character found", base.charCodeAt(i));
    } else {
      compare += base[i];
    }
  }
  console.log("comparison", compare);
};

describe("MoInstallSQL", () => {
  describe("createViewSQL", () => {
    it("should return the expected create view sql given a properly defined entity", () => {
      const model: Task = new Task();
      const expected: string = normalizeString(`create view vitask as select
        task.tsk_id,
        task.tsk_id_container,
        task.tsk_id_record,
        task.tsk_name,
        task.tsk_notes,
        task.tsk_parent,
        task.tsk_order,
        task.tsk_date_done,
        task.tsk_total_time_spent,
        task.tsk_ctg_in_process,
        task.tsk_qualifiers,
        task.tsk_tags,
        task.tsk_estimated_duration,
        task.tsk_schedule_date_start,
        task.tsk_schedule_date_end,
        task.tsk_date_view_until,
        task.tsk_id_user_added,
        task.tsk_id_user_asigned,
        task.tsk_template,
        task.tsk_template_state,
        task.tsk_date_due,
        task.tsk_id_related,
        task.tsk_url,
        task.tsk_ctg_repeats,
        task.tsk_id_main,
        task.tsk_ctg_rep_type,
        task.tsk_ctg_rep_after_completion,
        task.tsk_ctg_rep_end,
        task.tsk_rep_date_end,
        task.tsk_rep_end_iteration,
        task.tsk_rep_iteration,
        task.tsk_rep_frequency,
        task.tsk_ctg_rep_frequency_rule,
        task.tsk_rep_weekdays,
        task.tsk_date_add,
        task.tsk_date_mod,
        task.tsk_ctg_status,
        (select ctg_name from catalog where ctg_id = 'BOOLEAN' and ctg_sequential = tsk_ctg_in_process) as tsk_txt_in_process,
        (select ctg_name from catalog where ctg_id = 'BOOLEAN' and ctg_sequential = tsk_ctg_repeats) as tsk_txt_repeats,
        (select ctg_name from catalog where ctg_id = 'TASK_REPETITION_TYPE' and ctg_sequential = tsk_ctg_rep_type) as tsk_txt_rep_type,
        (select ctg_name from catalog where ctg_id = 'BOOLEAN' and ctg_sequential = tsk_ctg_rep_after_completion) as tsk_txt_rep_after_completion,
        (select ctg_name from catalog where ctg_id = 'TASK_REPETITION_END_AT' and ctg_sequential = tsk_ctg_rep_end) as tsk_txt_rep_end,
        (select ctg_name from catalog where ctg_id = 'TASK_REPETITION_FREQUENCY' and ctg_sequential = tsk_ctg_rep_frequency_rule) as tsk_txt_rep_frequency_rule,
        (select ctg_name from catalog where ctg_id = 'RECORD_STATUS' and ctg_sequential = tsk_ctg_status) as tsk_txt_status
        from task`);

      equal(instance.createViewSQL(model), expected);
    });
  });

  describe("createViewSQLNoSubQuery", () => {
    it("should return the expected create view sql given a properly defined entity", () => {
      const model: Task = new Task();
      const expected: string = normalizeString(`create view vitask as select
        task.tsk_id,
        task.tsk_id_container,
        task.tsk_id_record,
        task.tsk_name,
        task.tsk_notes,
        task.tsk_parent,
        task.tsk_order,
        task.tsk_date_done,
        task.tsk_total_time_spent,
        task.tsk_ctg_in_process,
        task.tsk_qualifiers,
        task.tsk_tags,
        task.tsk_estimated_duration,
        task.tsk_schedule_date_start,
        task.tsk_schedule_date_end,
        task.tsk_date_view_until,
        task.tsk_id_user_added,
        task.tsk_id_user_asigned,
        task.tsk_template,
        task.tsk_template_state,
        task.tsk_date_due,
        task.tsk_id_related,
        task.tsk_url,
        task.tsk_ctg_repeats,
        task.tsk_id_main,
        task.tsk_ctg_rep_type,
        task.tsk_ctg_rep_after_completion,
        task.tsk_ctg_rep_end,
        task.tsk_rep_date_end,
        task.tsk_rep_end_iteration,
        task.tsk_rep_iteration,
        task.tsk_rep_frequency,
        task.tsk_ctg_rep_frequency_rule,
        task.tsk_rep_weekdays,
        task.tsk_date_add,
        task.tsk_date_mod,
        task.tsk_ctg_status,
        catalog1.ctg_name as tsk_txt_in_process,
        catalog2.ctg_name as tsk_txt_repeats,
        catalog3.ctg_name as tsk_txt_rep_type,
        catalog4.ctg_name as tsk_txt_rep_after_completion,
        catalog5.ctg_name as tsk_txt_rep_end,
        catalog6.ctg_name as tsk_txt_rep_frequency_rule,
        catalog7.ctg_name as tsk_txt_status
        from task
        LEFT JOIN catalog catalog1 on (catalog1.ctg_id = 'BOOLEAN' and catalog1.ctg_sequential = tsk_ctg_in_process)
        LEFT JOIN catalog catalog2 on (catalog2.ctg_id = 'BOOLEAN' and catalog2.ctg_sequential = tsk_ctg_repeats)
        LEFT JOIN catalog catalog3 on (catalog3.ctg_id = 'TASK_REPETITION_TYPE' and catalog3.ctg_sequential = tsk_ctg_rep_type)
        LEFT JOIN catalog catalog4 on (catalog4.ctg_id = 'BOOLEAN' and catalog4.ctg_sequential = tsk_ctg_rep_after_completion)
        LEFT JOIN catalog catalog5 on (catalog5.ctg_id = 'TASK_REPETITION_END_AT' and catalog5.ctg_sequential = tsk_ctg_rep_end)
        LEFT JOIN catalog catalog6 on (catalog6.ctg_id = 'TASK_REPETITION_FREQUENCY' and catalog6.ctg_sequential = tsk_ctg_rep_frequency_rule)
        LEFT JOIN catalog catalog7 on (catalog7.ctg_id = 'RECORD_STATUS' and catalog7.ctg_sequential = tsk_ctg_status)`);

      equal(instance.createViewSQLNoSubQuery(model), expected);
    });
  });
});
