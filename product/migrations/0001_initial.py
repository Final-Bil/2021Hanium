# Generated by Django 3.2.6 on 2021-10-29 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_img', models.ImageField(blank=True, upload_to='uploads')),
                ('product_name', models.CharField(max_length=128)),
                ('product_type', models.CharField(max_length=128)),
                ('product_lend_h', models.CharField(max_length=128)),
                ('product_lend_d', models.CharField(max_length=128)),
                ('product_location', models.CharField(max_length=256)),
                ('product_detail', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
