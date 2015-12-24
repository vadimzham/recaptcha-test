ActiveAdmin.register Manual do

  permit_params :header, :subheader, :content, :link_on_video
  menu priority: 2

  index do
    selectable_column
    id_column
    column 'Заголовок', :header
    column 'Подзаголовок', :subheader
    actions
  end

  show do
    attributes_table do
      row :id
      row 'Заголовок' do manual.header end
      row 'Подзаголовок' do manual.subheader end
      row ('Содержание'){|manual| raw(manual.content)}
      row 'Ссылка на видео' do manual.link_on_video end
      row 'Дата создания' do manual.created_at end
      row 'Дата изменения' do manual.updated_at end
    end
  end

  form do |f|
    f.inputs 'Детали блока' do
      f.input :header, label: 'Заголовок'
      f.input :subheader, label: 'Подзаголовок'
      f.input :content, as: :ckeditor, ckeditor: {language: 'ru'}, label: 'Содержание'
      f.input :link_on_video, label: 'ID видео на YouTube', hint: 'ID видео - это буквенная часть, расолагающаяся в конце ссылки. Например в следующих сслыках ID видео равен tbODwqGZNTU http://www.youtube.com/watch?v=tbODwqGZNTU, https://youtu.be/tbODwqGZNTU'
    end
    f.actions
  end
end
