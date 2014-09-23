class ChangeArchivedColumnDefaultInTasks < ActiveRecord::Migration
  def change
    change_column :tasks, :archived, :boolean, :default => false, :null => false
  end
end
